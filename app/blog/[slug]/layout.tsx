import "./layout.css";
import Script from "next/script";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* For Code Embeds */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css"
          integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {children}

      <Script
        // async
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-core.min.js"
        integrity="sha512-LCKPTo0gtJ74zCNMbWw04ltmujpzSR4oW+fgN+Y1YclhM5ZrHCZQAJE4quEodcI/G122sRhSGU2BsSRUZ2Gu3w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="afterInteractive"
      />
      <Script
        // async
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/autoloader/prism-autoloader.min.js"
        integrity="sha512-GP4x8UWxWyh4BMbyJGOGneiTbkrWEF5izsVJByzVLodP8CuJH/n936+yQDMJJrOPUHLgyPbLiGw2rXmdvGdXHA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="afterInteractive"
      />
      <Script id="comment-conf" strategy="afterInteractive">
        {` var remark_config = {
        host: "https://comments.traleor.com",
        site_id: "traleor",
        ccomponents: ["embed", "counter"],
        max_shown_comments: 10,
        theme: "light",
        locale: "en",
        show_email_subscription: true,
        simple_view: false,
      }; `}
      </Script>
      <Script id="comment-setup" strategy="afterInteractive">
        {` !(function (e, n) {
        for (var o = 0; o < e.length; o++) {
          var r = n.createElement("script"),
            c = ".js",
            d = n.head || n.body;
          "noModule" in r
            ? ((r.type = "module"), (c = ".mjs"))
            : (r.async = !0),
            (r.defer = !0),
            (r.src = remark_config.host + "/web/" + e[o] + c),
            d.appendChild(r);
        }
      })(remark_config.components || ["embed"], document);`}
      </Script>
    </>
  );
}
