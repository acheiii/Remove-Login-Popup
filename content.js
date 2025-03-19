// 使用 MutationObserver 监听 DOM 变化，处理动态加载的弹窗
const observer = new MutationObserver(function (mutations) {
  // 尝试找到包含特定文本的元素
  const target = Array.from(document.querySelectorAll('div, p, span')).find(el => 
    el.textContent.includes('快速交易，快速跟单') || 
    el.textContent.includes('更快发现，秒级交易') || 
    el.textContent.includes('或者使用钱包插件登录')
  );

  if (target) {
    // 移除包含目标内容的整个父容器（可能是弹窗）
    const popup = target.closest('div');
    if (popup) {
      popup.remove();
      console.log('Login popup removed!');
      observer.disconnect(); // 移除后停止监听
    }
  }
});

// 开始监听 body 的子节点变化
observer.observe(document.body, { childList: true, subtree: true });

// 页面加载时立即检查一次
window.addEventListener('load', function () {
  const target = Array.from(document.querySelectorAll('div, p, span')).find(el => 
    el.textContent.includes('快速交易，快速跟单')
  );
  if (target) {
    target.closest('div').remove();
    console.log('Login popup removed on load!');
  }
});