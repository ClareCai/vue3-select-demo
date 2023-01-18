# vue3-select-demo

一个基于el-popover封装的select单选下拉框组件demo
文本框允许手工输入，右边有个”追加“按钮，点击后可将文本框数据插入下拉菜单作为结果集并选中

### 演示地址
[https://clarecai.github.io/vue3-select-demo/dist/](https://clarecai.github.io/vue3-select-demo/dist/)

### Demo 
`v-model`的值为当前被选中的`选项`的 id 属性值。
```html
<template>
  <fx-select
    v-model="value"
		clearable
    :selectOptions="selectOptions"
  >
  </fx-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      selectOptions: Array.from({length: 20}, (item,index) => {
				return {
					id: index + '',
					label: "选项" + (index + 1),
					disabled: index === 2 || index === 5
				}
			})
    }
  }
}
</script>
```


### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|------|-------|------ |
| value/v-model | 绑定值，对应选项数据中id值 | boolean / string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否清除功能 | boolean | — | false |
| placeholder | 默认提示 | string | — | '请选择' |
| dropDownWidth | 下拉选择框宽度 | string / number | — | 200 |
| inputWidth | input框宽度 | string / number | — | 200 |
| selectOptions | 选项数组集合 | array | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| change | 选中值发生变化时触发 | 目前的选中值，选中选项的数据对象 |
| focus | input 框聚焦时触发 | focus事件对象event |
| blur | input 框失焦时触发 | blur事件对象event |

### Methods
| 方法名 | 说明 | 参数 |
|--------|------|--------|
| focus | 使选择器的输入框获取焦点，并显示下拉框 | — |
| blur | 使选择器的输入框失去焦点，并隐藏下拉框 | — |

### Slot
| name | 说明 |
|--------|------|
| option | 选项插槽，传递参数为optionItem |