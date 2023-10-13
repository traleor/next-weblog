import React from "react";
import {
  WeblogContent,
  SimpleRichTextContent,
  FullRichTextContent,
  CtaBlockContent,
  HeadingBlockContent,
  ImageBlockContent,
  BannerBlockContent,
  CodeBlockContent,
} from "@/types";
import Link from "next/link";
import { ImageAtom } from "./atoms";

interface WeblogBlockRendererProps {
  content: WeblogContent;
}

const SimpleRichTextBlock: React.FC<SimpleRichTextContent> = ({ value }) => {
  return <div dangerouslySetInnerHTML={{ __html: value || "" }} />;
};

const FullRichTextBlock: React.FC<FullRichTextContent> = ({ value }) => {
  return <div dangerouslySetInnerHTML={{ __html: value || "" }} />;
};

const CtaBlock: React.FC<CtaBlockContent> = ({ value }) => {
  //   console.log("CTA", value);
  return (
    <Link
      // TODO: Link page is returned as id e.g 1, 2, 3, not as slug
      href={String(value.link_url) || ""}
      target={value.open_in_new_tab ? "_blank" : "_self"}
    >
      {value.text || ""}
    </Link>
  );
};

const HeadingBlock: React.FC<HeadingBlockContent> = ({ value }) => {
  const HeadingTag = value?.size || "h2";
  return <HeadingTag id={value.heading_slug}>{value.heading_text}</HeadingTag>;
};

const ImageBlock: React.FC<ImageBlockContent> = ({ value }) => {
  return (
    <div>
      <figure>
        <ImageAtom image={value.image} />
        <figcaption>
          <Link href={value.attribution || ""} target="_blank">
            {value.caption || ""}
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

const BannerBlock: React.FC<BannerBlockContent> = ({ id, value }) => {
  return (
    <section id={id}>
      <div>
        <h2>{value.hero_text || ""}</h2>
        <h3>
          <div dangerouslySetInnerHTML={{ __html: value.paragraph || "" }} />
        </h3>
        <ImageAtom image={value.image} />
        <Link
          href={
            // TODO: Link page is returned as id e.g 1, 2, 3, not as slug
            String(value.hero_link.link_url) ?? ""
          }
          target={value.hero_link.open_in_new_tab ? "_blank" : "_self"}
        >
          {value.hero_link.text || ""}
        </Link>
      </div>
    </section>
  );
};

{
  /* <div className="block-code_block">
  {" "}
  <section className="default-padding full-width">
    <pre className="language-python">
      <code className="language-python">
        {`# Preparing Dataset
# temporal storage for labels and images
data=[]
labels=[]

# Cat 0
# Get the animal directory
cats = os.listdir(os.getcwd() + "/CNN/data/cat")
for x in cats:
    """
    Loop through all the images in the directory
    1. Convert to arrays
    2. Resize the images
    3. Add image to dataset
    4. Add the label
    """
    imag=cv2.imread(os.getcwd() + "/CNN/data/cat/" + x)
    img_from_ar = Image.fromarray(imag, 'RGB')
    resized_image = img_from_ar.resize((50, 50))
    data.append(np.array(resized_image))
    labels.append(0)

# load in animals and labels
animals=np.array(data)
labels=np.array(labels)
# save
np.save("animals",animals)
np.save("labels",labels)

# Train Model
# train through 100 times
history = model.fit(x_train, y_train, epochs=100,
                    validation_data=(x_test, y_test))

# perform validation and get accuracy
test_loss, test_acc = model.evaluate(x_test,  y_test, verbose=2)

print(test_acc)

# save the model or brain
model.save("model.h5")`}
      </code>
    </pre>
  </section>
</div>; */
}

const CodeBlock: React.FC<CodeBlockContent> = ({ value }) => {
  return (
    <div className="block-code_block">
      <section className="default-padding full-width">
        <pre className={`language-${value.language}`}>
          <code className={`language-${value.language}`}>
            {value.code || ""}
          </code>
        </pre>
      </section>
    </div>
  );
};

const WeblogBlockRenderer: React.FC<WeblogBlockRendererProps> = ({
  content,
}) => {
  switch (content.type) {
    case "simple_richtext":
      return <SimpleRichTextBlock {...content} />;
    case "full_richtext":
      return <FullRichTextBlock {...content} />;
    case "cta_block":
      return <CtaBlock {...content} />;
    case "heading_block":
      return <HeadingBlock {...content} />;
    case "image_block":
      return <ImageBlock {...content} />;
    case "banner_block":
      return <BannerBlock {...content} />;
    case "code_block":
      return <CodeBlock {...content} />;
    default:
      // console.log("Unknown block type", content);
      return null;
  }
};

export default WeblogBlockRenderer;
