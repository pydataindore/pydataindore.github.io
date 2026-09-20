(() => {
    const dialog = document.getElementById('hacktoberfest-promo');
    const seenKey = 'pydata-hacktoberfest-2026-promo-seen';
    const expiresAt = Date.parse('2026-10-05T00:00:00+05:30');

    // This script and dialog are included only on the home page.
    if (!dialog || typeof dialog.showModal !== 'function' || Date.now() >= expiresAt) return;

    try {
        if (localStorage.getItem(seenKey)) return;
    } catch (error) {
        // Avoid repeated prompts when the browser cannot remember this visit.
        return;
    }

    let previousFocus;
    const close = () => dialog.close();

    function trackClick(event, eventName) {
        // Follow the site's opt-in policy, including when storage is unavailable.
        try {
            if (localStorage.getItem('pydata-cookie-consent') !== 'granted') return;
        } catch (error) {
            return;
        }
        if (typeof window.gtag !== 'function') return;

        const link = event.currentTarget;
        const params = {
            event_id: 'hacktoberfest_2026',
            placement: 'home_popup',
            link_url: link.href
        };

        // Give same-tab navigation time to send the event. Always continue if
        // analytics is blocked; modified clicks retain normal browser behavior.
        const sameTab = link.target !== '_blank' && !event.defaultPrevented &&
            event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey;
        let navigate;
        if (sameTab) {
            event.preventDefault();
            let navigated = false;
            navigate = () => {
                if (navigated) return;
                navigated = true;
                window.location.assign(link.href);
            };
            params.event_callback = navigate;
            params.event_timeout = 500;
            window.setTimeout(navigate, 500);
        }

        try {
            window.gtag('event', eventName, params);
        } catch (error) {
            if (navigate) navigate();
        }
    }

    dialog.querySelector('[data-promo-register]').addEventListener('click', event => {
        trackClick(event, 'hacktoberfest_register_click');
    });
    dialog.querySelector('[data-promo-details]').addEventListener('click', event => {
        trackClick(event, 'hacktoberfest_details_click');
    });

    dialog.querySelector('.home-promo-close').addEventListener('click', close);
    dialog.querySelector('[data-promo-register]').addEventListener('click', close);
    dialog.addEventListener('close', () => {
        document.documentElement.classList.remove('home-promo-open');
        if (previousFocus && previousFocus.isConnected) previousFocus.focus();
    });

    function showPromo() {
        if (dialog.open || Date.now() >= expiresAt) return;
        try {
            // Recheck after waiting: another visit may have shown the popup.
            if (localStorage.getItem(seenKey)) return;
        } catch (error) {
            return;
        }

        previousFocus = document.activeElement;
        if (previousFocus && previousFocus.closest('#cookie-consent')) {
            previousFocus = document.querySelector('.hero-actions a');
        }

        // Native dialog provides keyboard focus containment and Escape dismissal.
        dialog.showModal();
        document.documentElement.classList.add('home-promo-open');
        try {
            localStorage.setItem(seenKey, 'true');
        } catch (error) {
            close();
        }
    }

    const consentBanner = document.getElementById('cookie-consent');
    if (consentBanner && !consentBanner.hidden) {
        // Both Accept and Decline unlock the promotion; only Accept enables tracking.
        window.addEventListener('pydata:consent-decided', showPromo, { once: true });
    } else {
        showPromo();
    }
})();
