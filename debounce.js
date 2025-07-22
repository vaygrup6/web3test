function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// 示例用法：窗口大小调整后只触发一次
window.addEventListener('resize', debounce(() => {
  console.log('窗口已调整大小！');
}, 500));
