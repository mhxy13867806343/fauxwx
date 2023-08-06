import {getAsciiLength} from '@/utils/tools/regTools.js'
export default ()=>{
    const max144=144//评论最大为144字内
    const max30=30//名字最大为30字内
    const versionList=ref([
        {
            "version": "0.1",
            "createTime": "2023-08-03",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Bug D"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-08-02",
            "content": [
                {
                    "name": "Feature C"
                },
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-08-01",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Feature C"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-31",
            "content": [
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-30",
            "content": [
                {
                    "name": "Bug D"
                },
                {
                    "name": "Update A"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-29",
            "content": [
                {
                    "name": "Feature C"
                },
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-28",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Feature C"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-27",
            "content": [
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-26",
            "content": [
                {
                    "name": "Bug D"
                },
                {
                    "name": "Update A"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-25",
            "content": [
                {
                    "name": "Feature C"
                },
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-24",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Feature C"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-23",
            "content": [
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-22",
            "content": [
                {
                    "name": "Bug D"
                },
                {
                    "name": "Update A"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-21",
            "content": [
                {
                    "name": "Feature C"
                },
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-20",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Feature C"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-19",
            "content": [
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-18",
            "content": [
                {
                    "name": "Bug D"
                },
                {
                    "name": "Update A"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-17",
            "content": [
                {
                    "name": "Feature C"
                },
                {
                    "name": "Fix B"
                }
            ]
        },
        {
            "version": "0.1",
            "createTime": "2023-07-16",
            "content": [
                {
                    "name": "Update A"
                },
                {
                    "name": "Feature C"
                }
            ]
        },
        {
            "version": "0.2",
            "createTime": "2023-07-15",
            "content": [
                {
                    "name": "Fix B"
                }
            ]
        }
    ] )//更新历史数据
    onMounted(()=>{
        getversionList()
    })
//历史数据初始化配置信息
    const getversionList=()=>{
        const array=versionList.value
        return array.map(item=>{
            item.activeName='1'
            item.isActiveName=false
            item.inputForm=''
            item.isForm=''
            item.userName=''
        })
    }
    //请输入144字内的评论内容
    const onInputFormName=value=>{
        return getAsciiLength(value)
    }
    //请输入您的昵称
    const onInputUserName=value=>{
        return getAsciiLength(value)
    }
    
    const inputCommentValue=(value)=>{
        return getAsciiLength(value)
    }
    
    
    //查看版本相关评论
    const onClickActiveName=item=>{
        item.isActiveName=!item.isActiveName
        item.isForm=false
        onClearInput(item)
    }
//点击评论进行回复操作
    const onClickFormInput=item=>{
        item.isForm=!item.isForm
        item.isActiveName=false
        onClearInput(item)
    }
    //清除重置
    const onClearInput=item=>{
        item.inputForm=''
        item.userName=''
    }
    //关闭弹窗的时候,重置输入框内容
    const onClierlAllForm=()=>{
        getversionList()
    }
    return {
        versionList,
        inputCommentValue,
        onClickActiveName,
        onClickFormInput,
        onClearInput,
        onClierlAllForm
    }
}
