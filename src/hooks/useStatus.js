import { useLocalStorage } from '@vueuse/core'

export default () => {
    const loginChecked = 'loginChecked'
    const formUserNane='formUserNane'
    const checkedName = useLocalStorage(loginChecked, false)
    const formUserNaneValue = useLocalStorage(formUserNane, '')
    const onClickSaveForm = (initialValue ) => {
        if(!initialValue.length){
            console.log(1111)
            return
        }
        checkedName.value!=checkedName.value
        formUserNaneValue.value=initialValue
        return checkedName.value
    }
    const getInitCheckedName = () => {
        if(checkedName.value){
            if(formUserNaneValue.value.length){
                return formUserNaneValue.value
            }
            return ''
        }
    }
    return {
        checkedName,
        onClickSaveForm,
        getInitCheckedName
    }
}
