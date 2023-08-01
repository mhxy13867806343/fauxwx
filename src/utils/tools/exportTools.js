//新的逻辑，均放在这边
export const version='1.0'//版本号，用于佛祖保佑
export const versionBuddhaBlessed=()=>{
    const v1=version||'0.1'
    //佛祖保佑，限在生产环境中执行
    if(import.meta.env.MODE==='production'&&v1==='1.0'){
        const ffDebugger=new Function('debugger')
      document.addEventListener('contextmenu', event=> {
        event.preventDefault();
      });
      //禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具）
      window.onkeydown = window.onkeyup = window.onkeypress = function () {
        window.event.returnValue = false;
        return false;
      }
      //如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面
      var h = window.innerHeight, w = window.innerWidth;
      window.onresize = function () {
        if (h != window.innerHeight || w != window.innerWidth) {
          setInterval(function () {
            detectDevTool(ffDebugger)
          }, 1000);
        }
      }
    }
}
function  detectDevTool(ffDebugger){
    const threshold = 10; // 你可以根据需要调整此值
    const diff = window.outerWidth - window.innerWidth;
    
    if (diff > threshold) {
        console.log('开发者工具可能已打开');
        // 在这里执行你需要的操作
        ffDebugger()
    }
}
