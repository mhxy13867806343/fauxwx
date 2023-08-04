//密码正则
export const passwordPattern = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
export function getAsciiLength(s) {
    let len = 0;
    for(let i = 0; i < s.length; i++) {
        // 使用正则表达式检查字符是否为中文或特殊字符
        if (/[\u4e00-\u9fa5\^&*]/.test(s[i])) {
            len += 2;
        } else {
            len += 1;
        }
    }
    return len;
}
