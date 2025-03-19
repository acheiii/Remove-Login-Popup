# Remove-Login-Popup
Remove Login Popup



#### PC Chrome

only load

















#### IOS

步骤：如何在 iOS 上使用 Userscripts
1. 下载并安装 Userscripts
打开 App Store，搜索“Userscripts”（开发者是 Justin Wasack），下载免费版。
安装完成后，打开应用，它会提示你设置一个脚本保存目录。
2. 设置脚本目录
打开 Userscripts 应用，点击“Set Userscripts Directory”按钮。
选择一个文件夹（推荐用 iCloud Drive，比如新建一个“Userscripts”文件夹），这样脚本可以同步到其他设备。
确认后，应用会记住这个目录，用于存储和加载脚本。
3. 添加脚本
Userscripts 没有内置编辑器（不像 macOS 版），所以需要手动添加脚本文件：
准备脚本：
用电脑或手机上的文本编辑器（比如“备忘录”或“文件”App）创建新文件。
粘贴以下代码（这是之前优化的移除弹窗脚本）：
javascript

收起

換行

複製
// ==UserScript==
// @name         Remove gmgn.ai Login Popup
// @match        https://gmgn.ai/*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';
  const observer = new MutationObserver(function () {
    const target = Array.from(document.querySelectorAll('div, p, span')).find(el => 
      el.textContent.includes('快速交易，快速跟单')
    );
    if (target) {
      target.closest('div').remove();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  // 初始检查
  const initialTarget = Array.from(document.querySelectorAll('div, p, span')).find(el => 
    el.textContent.includes('快速交易，快速跟单')
  );
  if (initialTarget) initialTarget.closest('div').remove();
})();
保存文件：
文件名设为 remove-gmgn-popup.user.js（必须以 .user.js 结尾）。
保存到你刚才设置的目录（比如 iCloud Drive 的“Userscripts”文件夹）。
如果用手机操作，直接在“文件”App 里新建文件，粘贴代码，保存即可。
4. 启用 Userscripts 扩展
打开 Safari。
点击地址栏左侧的 “AA”按钮（或 iPad 上的扩展图标）。
选择“管理扩展” → 找到“Userscripts” → 打开开关。
返回 Safari，点击“AA” → “Userscripts”，确保它是开启状态。
权限设置：
点击“总是允许” → “在所有网站上”，这样脚本会在所有匹配的页面自动运行。
5. 测试脚本
在 Safari 打开 https://gmgn.ai/sol/address/avAtiJAzAJv8dhMC6GLjW3FpJ1wY7aNegaxE9q4H5h5。
如果设置正确，弹窗会在页面加载时自动被移除，无需手动干预。
检查：
如果弹窗还在，打开“AA” → “Userscripts”，看是否有错误提示，或者脚本没加载。
6. 确认自动运行
Userscripts 的 @match https://gmgn.ai/* 确保脚本只在 gmgn.ai 域名下自动运行。
每次打开匹配的页面，脚本都会自动执行，不需要手动触发。
