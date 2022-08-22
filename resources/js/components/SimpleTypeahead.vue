<template>
    <form class="mb-7" @submit="onSubmit">
        <div :id="wrapperId" class="simple-typeahead">
            <div class="relative">
                <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    ref="inputRef"
                    :id="inputId"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="search"
                    :placeholder="placeholder"
                    v-model="input"
                    @input="onInput"
                    @focus="onFocus"
                    @blur="onBlur"
                    @keydown.down.prevent="onArrowDown"
                    @keydown.up.prevent="onArrowUp"
                    @keydown.tab.prevent="selectCurrentSelection"
                    autocomplete="off"
                    v-bind="$attrs"
                />
                <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>

            <div v-if="isListVisible" class="simple-typeahead-list">
                <div
                    class="simple-typeahead-list-header"
                    v-if="$slots['list-header']"
                >
                    <slot name="list-header"></slot>
                </div>
                <div
                    class="simple-typeahead-list-item"
                    :class="{
                        'simple-typeahead-list-item-active':
                            currentSelectionIndex == index,
                    }"
                    v-for="(item, index) in filteredItems"
                    :key="index"
                    @mousedown.prevent
                    @click="selectItem(item)"
                    @mouseenter="currentSelectionIndex = index"
                >
                    <span
                        class="simple-typeahead-list-item-text"
                        :data-text="itemProjection(item)"
                        v-if="$slots['list-item-text']"
                        ><slot
                            name="list-item-text"
                            :item="item"
                            :itemProjection="itemProjection"
                            :boldMatchText="boldMatchText"
                        ></slot
                    ></span>
                    <span
                        class="simple-typeahead-list-item-text"
                        :data-text="itemProjection(item)"
                        v-html="boldMatchText(itemProjection(item))"
                        v-else
                    ></span>
                </div>
                <div
                    class="simple-typeahead-list-footer"
                    v-if="$slots['list-footer']"
                >
                    <slot name="list-footer"></slot>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { defineComponent } from "vue";
export default /*#__PURE__*/ defineComponent({
    name: "Vue3SimpleTypeahead",
    emits: ["onInput", "onFocus", "onBlur", "selectItem", "onSubmit"],
    inheritAttrs: false,
    props: {
        id: {
            type: String,
        },
        placeholder: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            required: true,
        },
        defaultItem: {
            default: null,
        },
        itemProjection: {
            type: Function,
            default(item) {
                return item;
            },
        },
        minInputLength: {
            type: Number,
            default: 2,
            validator: (prop) => {
                return prop >= 0;
            },
        },
    },
    mounted() {
        if (this.defaultItem !== undefined && this.defaultItem !== null) {
            this.selectItem(this.defaultItem);
        }
    },
    data() {
        return {
            inputId:
                this.id ||
                `simple_typeahead_${(Math.random() * 1000).toFixed()}`,
            input: "",
            isInputFocused: false,
            currentSelectionIndex: 0,
        };
    },
    methods: {
        onInput() {
            if (
                this.isListVisible &&
                this.currentSelectionIndex >= this.filteredItems.length
            ) {
                this.currentSelectionIndex =
                    (this.filteredItems.length || 1) - 1;
            }
            this.$emit("onInput", {
                input: this.input,
                items: this.filteredItems,
            });
        },
        onFocus() {
            this.isInputFocused = true;
            this.$emit("onFocus", {
                input: this.input,
                items: this.filteredItems,
            });
        },
        onBlur() {
            this.isInputFocused = false;
            this.$emit("onBlur", {
                input: this.input,
                items: this.filteredItems,
            });
        },
        onSubmit($event) {
            // this.isInputFocused = false;

            console.log("onSubmit $event", $event);
            this.$emit("onSubmit", this.input);
        },
        onArrowDown($event) {
            if (
                this.isListVisible &&
                this.currentSelectionIndex < this.filteredItems.length - 1
            ) {
                this.currentSelectionIndex++;
            }
            this.scrollSelectionIntoView();
        },
        onArrowUp($event) {
            if (this.isListVisible && this.currentSelectionIndex > 0) {
                this.currentSelectionIndex--;
            }
            this.scrollSelectionIntoView();
        },
        scrollSelectionIntoView() {
            setTimeout(() => {
                const list_node = document.querySelector(
                    `#${this.wrapperId} .simple-typeahead-list`
                );
                const active_node = document.querySelector(
                    `#${this.wrapperId} .simple-typeahead-list-item.simple-typeahead-list-item-active`
                );
                if (
                    !(
                        active_node.offsetTop >= list_node.scrollTop &&
                        active_node.offsetTop + active_node.offsetHeight <
                            list_node.scrollTop + list_node.offsetHeight
                    )
                ) {
                    let scroll_to = 0;
                    if (active_node.offsetTop > list_node.scrollTop) {
                        scroll_to =
                            active_node.offsetTop +
                            active_node.offsetHeight -
                            list_node.offsetHeight;
                    } else if (active_node.offsetTop < list_node.scrollTop) {
                        scroll_to = active_node.offsetTop;
                    }
                    list_node.scrollTo(0, scroll_to);
                }
            });
        },
        selectCurrentSelection() {
            if (this.currentSelection) {
                this.selectItem(this.currentSelection);
            }
        },
        selectItem(item) {
            this.input = this.itemProjection(item);
            this.currentSelectionIndex = 0;
            this.$refs.inputRef.blur();
            this.$emit("selectItem", item);
        },
        escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        },
        boldMatchText(text) {
            const regexp = new RegExp(
                `(${this.escapeRegExp(this.input)})`,
                "ig"
            );
            return text.replace(regexp, "<strong>$1</strong>");
        },
        clearInput() {
            this.input = "";
        },
        getInput() {
            return this.$refs.inputRef;
        },
        focusInput() {
            this.$refs.inputRef.focus();
            this.onFocus();
        },
        blurInput() {
            this.$refs.inputRef.blur();
            this.onBlur();
        },
    },
    computed: {
        wrapperId() {
            return `${this.inputId}_wrapper`;
        },
        filteredItems() {
            const regexp = new RegExp(this.escapeRegExp(this.input), "i");
            return this.items.filter((item) =>
                this.itemProjection(item).match(regexp)
            );
        },
        isListVisible() {
            return (
                this.isInputFocused &&
                this.input.length >= this.minInputLength &&
                this.filteredItems.length
            );
        },
        currentSelection() {
            return this.isListVisible &&
                this.currentSelectionIndex < this.filteredItems.length
                ? this.filteredItems[this.currentSelectionIndex]
                : undefined;
        },
    },
});
</script>

<style scoped>
.simple-typeahead {
    position: relative;
    width: 100%;
}
.simple-typeahead > input {
    margin-bottom: 0;
}
.simple-typeahead .simple-typeahead-list {
    position: absolute;
    width: 100%;
    border: none;
    max-height: 400px;
    overflow-y: auto;
    border-bottom: 0.1rem solid #d1d1d1;
    z-index: 9;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-header {
    background-color: #fafafa;
    padding: 0.6rem 1rem;
    border-bottom: 0.1rem solid #d1d1d1;
    border-left: 0.1rem solid #d1d1d1;
    border-right: 0.1rem solid #d1d1d1;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-footer {
    background-color: #fafafa;
    padding: 0.6rem 1rem;
    border-left: 0.1rem solid #d1d1d1;
    border-right: 0.1rem solid #d1d1d1;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item {
    cursor: pointer;
    background-color: #fafafa;
    padding: 0.6rem 1rem;
    border-bottom: 0.1rem solid #d1d1d1;
    border-left: 0.1rem solid #d1d1d1;
    border-right: 0.1rem solid #d1d1d1;
}
.simple-typeahead
    .simple-typeahead-list
    .simple-typeahead-list-item:last-child {
    border-bottom: none;
}
.simple-typeahead
    .simple-typeahead-list
    .simple-typeahead-list-item.simple-typeahead-list-item-active {
    background-color: #e1e1e1;
}
</style>
