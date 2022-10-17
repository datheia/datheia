function copyToClipboard(e) {
    if (window.clipboardData && window.clipboardData.setData) return clipboardData.setData("Text", e);
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var t = document.createElement("textarea");
        t.textContent = e, t.style.position = "fixed", document.body.appendChild(t), t.select();
        try {
            return !!document.execCommand("copy")
        } catch (e) {
            return !1
        } finally {
            document.body.removeChild(t)
        }
    }
}
