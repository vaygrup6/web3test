function getAllLinks() {
  const links = document.querySelectorAll('a');
  const result = [];
  links.forEach(link => {
    result.push({
      text: link.textContent.trim(),
      href: link.href
    });
  });
  return result;
}

// 示例调用
console.log(getAllLinks());
