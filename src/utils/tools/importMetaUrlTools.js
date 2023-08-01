/**
 *
 * @param ls 在src下的文件夹
 * @param path 目录
 * @param os 文件名地址
 * @returns {string}
 */
export const  getWeatherIconSvg=(ls='../assets/',path='icon/',os='')=>{
    return new URL(`${ls}${path}/${os}`, import.meta.url).href
}
