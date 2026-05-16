/**
 * 佛经宝库 - 主要JavaScript功能
 */

// 搜索功能
function searchSutras() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('请输入搜索关键词');
        return;
    }

    // 佛经数据库
    const sutras = [
        { name: '般若波罗蜜多心经', path: 'sutras/heart-sutra.html', keywords: ['心经', '般若', '波罗蜜', '空性'] },
        { name: '金刚般若波罗蜜经', path: 'sutras/diamond-sutra.html', keywords: ['金刚经', '金刚', '般若', '无相'] },
        { name: '佛说阿弥陀经', path: 'sutras/amitabha-sutra.html', keywords: ['阿弥陀经', '阿弥陀', '净土', '往生'] },
        { name: '佛说无量寿经', path: 'sutras/infinite-life-sutra.html', keywords: ['无量寿经', '无量寿', '阿弥陀佛', '四十八愿'] },
        { name: '地藏菩萨本愿经', path: 'sutras/ksitigarbha-sutra.html', keywords: ['地藏经', '地藏', '菩萨', '地狱', '孝道'] },
        { name: '妙法莲华经', path: 'sutras/lotus-sutra.html', keywords: ['法华经', '法华', '莲花', '会三归一'] },
        { name: '大方广佛华严经', path: 'sutras/avatamsaka-sutra.html', keywords: ['华严经', '华严', '法界', '普贤'] },
        { name: '梵网经', path: 'sutras/brahma-net-sutra.html', keywords: ['梵网经', '梵网', '菩萨戒', '十重戒'] }
    ];

    // 搜索匹配
    const results = sutras.filter(sutra => {
        const nameMatch = sutra.name.toLowerCase().includes(searchTerm);
        const keywordMatch = sutra.keywords.some(kw => kw.toLowerCase().includes(searchTerm));
        return nameMatch || keywordMatch;
    });

    if (results.length > 0) {
        // 显示搜索结果
        let resultHtml = '<div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">';
        resultHtml += '<h4 style="color: #8B4513; margin-bottom: 15px;">搜索结果：</h4>';
        resultHtml += '<div style="display: flex; flex-direction: column; gap: 10px;">';
        
        results.forEach(sutra => {
            resultHtml += `<a href="${sutra.path}" style="padding: 12px 15px; background: #FFF8DC; border-radius: 8px; text-decoration: none; color: #333; border-left: 4px solid #DAA520; transition: all 0.3s;">${sutra.name}</a>`;
        });
        
        resultHtml += '</div></div>';
        
        // 插入到搜索框下方
        const existingResult = document.querySelector('.search-results');
        if (existingResult) {
            existingResult.remove();
        }
        
        const searchBox = document.querySelector('.search-box');
        const resultDiv = document.createElement('div');
        resultDiv.className = 'search-results';
        resultDiv.innerHTML = resultHtml;
        searchBox.parentNode.insertBefore(resultDiv, searchBox.nextSibling);
    } else {
        alert('未找到匹配的佛经，请尝试其他关键词');
    }
}

// 回车搜索
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchSutras();
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 滚动时添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    document.querySelectorAll('.sutra-card, .feature-item, .sutra-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 打印功能
function printSutra() {
    window.print();
}

// 字体大小调整
function adjustFontSize(action) {
    const content = document.querySelector('.sutra-content');
    if (!content) return;

    const currentSize = parseInt(window.getComputedStyle(content).fontSize);
    let newSize;

    if (action === 'increase') {
        newSize = Math.min(currentSize + 2, 24);
    } else if (action === 'decrease') {
        newSize = Math.max(currentSize - 2, 14);
    } else {
        newSize = 16; // 默认
    }

    content.style.fontSize = newSize + 'px';
    localStorage.setItem('sutraFontSize', newSize);
}

// 恢复字体大小
document.addEventListener('DOMContentLoaded', function() {
    const savedSize = localStorage.getItem('sutraFontSize');
    if (savedSize) {
        const content = document.querySelector('.sutra-content');
        if (content) {
            content.style.fontSize = savedSize + 'px';
        }
    }
});

// 添加到收藏夹提示
function addToFavorites() {
    alert('请按 Ctrl+D (Windows) 或 Command+D (Mac) 将本页添加到收藏夹');
}

// 分享功能
function shareSutra() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).catch(err => console.log('分享失败', err));
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('链接已复制到剪贴板');
        }).catch(() => {
            alert('请手动复制页面链接');
        });
    }
}

// 夜间模式切换（可选功能）
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// 恢复夜间模式设置
document.addEventListener('DOMContentLoaded', function() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
});

// 页面滚动进度指示器
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    // 可以在这里添加进度条更新逻辑
});

// 返回顶部按钮
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

console.log('🙏 佛经宝库 - 愿以此功德，普及于一切');
