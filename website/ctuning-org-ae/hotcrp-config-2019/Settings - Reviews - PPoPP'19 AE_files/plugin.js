// THIS HOTCRP PLUGIN IS NOT FREE SOFTWARE
// Copyright (c) 2017 Eddie Kohler, all rights reserved

(function () {
    function katex_renderer(math, isblock) {
        if (window.katex == null) {
            window.katex = false;
            $("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">');
            $.ajax("https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.js", {
                method: "GET", dataType: "script", cache: true, global: false,
                success: function () {
                    $(".katex_loading").each(function () {
                        $(this).removeClass("katex_loading").html(katex_renderer(this.getAttribute("data-katex-src"), this.tagName.toUpperCase() == "DIV"));
                    });
                }
            });
        }
        var t;
        if (katex) {
            try {
                t = katex.renderToString(math, {displayMode: isblock});
            } catch (err) {
                var estr = err.toString().replace(/(?:^ParseError: |Expected 'EOF', )/g, "");
                t = '<code class="matherror" title="' + escape_entities(estr) + '">' + marked.escape(math, true) + '</code>';
                if (isblock)
                    t = '<div>' + t + '</div>';
            }
        } else {
            var tag = isblock ? 'div' : 'span';
            t = '<' + tag + ' class="katex_loading" data-katex-src="' + escape_entities(math) + '"></' + tag + '>';
        }
        return t;
    }

    var my_marked = function (text, opts) {
        var renderer = new marked.Renderer();
        renderer.code = function (code, lang, escaped) {
            if (this.options.highlight) {
                var out = this.options.highlight(code, lang);
                if (out != null && out !== code) {
                    escaped = true;
                    code = out;
                }
            }
            var t = '<pre class="rm"><code';
            if (lang)
                t += ' class="' + this.options.langPrefix + marked.escape(lang, true) + '"';
            return t + '>' + (escaped ? code : marked.escape(code, true)) + '\n</code></pre>\n';
        };
        renderer.list = function (body, ordered) {
            var l = ordered ? 'ol' : 'ul';
            return '<' + l + ' class="rm">' + body + '</' + l + '>';
        };
        renderer.listitem = function (text, bullet) {
            var t = '<li>', m;
            if (bullet === "-")
                t = '<li class="rm-item-minus">';
            else if (bullet === "+")
                t = '<li class="rm-item-plus">';
            else if ((m = /^(\d+)/.exec(bullet)))
                t = '<li class="rm-item-num" value="' + m[1] + '">';
            else
                t = '<li class="rm-item">';
            return t + text + '</li>';
        };
        renderer.heading = function (text, level) {
            return '<h' + level + ' class="rm">' + text + '</h' + level + '>\n';
        };
        renderer.hr = function () {
            return '<hr class="rm" />\n';
        };
        renderer.table = function (header, body) {
            return '<table class="rm"><thead>' + header + '</thead><tbody>' + body + '</tbody></table>\n';
        };
        renderer.tablecell = function (content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = '<' + type + ' class="rm"';
            if (flags.aign)
                tag += ' style="text-align:' + flags.align + '"';
            return tag + '>' + content + '</' + type + '>';
        };
        renderer.blockquote = function (quote) {
	    return '<blockquote class="rm">' + quote + '</blockquote>';
        };
        renderer.math = katex_renderer;
        renderer.codespan = function (text) {
            return '<code class="rm">' + text + '</code>';
        };
        marked.setOptions({
            gfm: true, tables: true, math: true,
            sanitize: true, renderer: renderer
        });
        my_marked = marked;
        return my_marked(text, opts);
    };
    function render_div(text, args) {
        var prefix = null;
        if (this && this.firstChild
            && (this.firstChild.nodeName == "EM" || this.firstChild.nodeName == "SPAN")) {
            var e = this.firstChild;
            this.removeChild(e);
            prefix = $(e).text();
            if (text.substr(0, prefix.length) == prefix)
                text = text.substr(prefix.length).replace(/^ /, "");
            var n = document.createElement("div");
            n.appendChild(e);
            prefix = $(n).html();
        }
        if (!text)
            return "";
        text = my_marked(text, args && args.abs ? {latexemph: 1} : null);
        if (prefix)
            text = text.replace(/^((?:<(?:div|p)[^>]*>)*)/i, function (s) {
                return s + prefix + ' ';
            });
        return '<div class="rm ' + (args && args.plx ? 'rmplx">' : 'rml">') + text + '</div>';
    }

    render_text.add_format({
        format: 1, has_preview: true, can_preview: true, render: render_div,
        render_inline: function (text) {
            return text ? my_marked(text, {inline: true}) : "";
        }, description: 'Markdown styling and LaTeX math supported'
    });
    render_text.add_format({
        format: "1.plx", formatClass: 1, render: function (text) {
            var hd = null;
            if (this.firstChild && this.firstChild.nodeName == "EM"
                && this.firstChild.className == "plx") {
                hd = $(this.firstChild).text();
                text = text.substr(hd.length).replace(/^ /, "");
            }
            if (text) {
                text = my_marked(text).replace(/<\/p>\n<p>/g, " ¶ ");
                if (hd)
                    text = text.replace(/^((?:<(?:div|p)[^>]*>)*)/i, function (s) {
                        return s + '<em class="plx">' + escape_entities(hd) + '</em> ';
                    });
                return '<div class="rm rmplx">' + text + '</div>';
            } else
                return "";
        }
    });
})();

function acmfinalprep_checkacmcopyright() {
    $.ajax(hoturl_post("api", {fn: "checkacmcopyright", p: hotcrp_paperid}), {
        success: function (data) {
            if (data.ok && data.acmfinalprep_html)
                $("#acmfinalprep").html(data.acmfinalprep_html);
        }
    });
    return false;
}

$(function () {
    if ($("input, textarea, select, button").filter("*[name=i]").length)
        log_jserror("Input with name=i");
});
