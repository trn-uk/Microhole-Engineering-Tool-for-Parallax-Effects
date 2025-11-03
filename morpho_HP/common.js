document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ページフェードイン ---
    
    // もしトップページ（#splash-screen）で「ない」なら
    if (!document.getElementById('splash-screen')) {
        
        // ページ読み込みと同時にフェードインを開始
        document.body.classList.add('is-visible');
    }
    // (トップページの場合は、top.js が 'intro-started' を追加するまで
    // 'is-visible' が付かないので、フェードインが始まらない)


    // --- 2. ページ遷移 (FADE OUT) ---
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // 外部リンク、ページ内リンク(#)、JSリンクなどは除外
            if (!href || link.target === '_blank' || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
                return;
            }
            
            // 内部リンクの場合
            e.preventDefault(); // いったんページ移動を止める
            document.body.classList.add('is-fading'); // フェードアウト開始
            
            // 1秒後 (CSSの transition: 1.0s に合わせる) にページ移動
            setTimeout(() => {
                window.location.href = href;
            }, 1000); 
        });
    });

});