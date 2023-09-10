"use client";
import Script from "next/script";

const Comment = () => {
  return (
    <>
      <div id="remark42"></div>
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
};

export default Comment;
