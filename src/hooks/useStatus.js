import { useClipboard } from '@vueuse/core'
export default () => {
    const source = ref('Hello')
    const { text, copy, copied, isSupported } = useClipboard({ source })
    return {
        checkedName,
        onClickSaveForm,
        getInitCheckedName
    }
}
