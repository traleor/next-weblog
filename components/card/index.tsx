import React from "react";
import Link from "next/link";
import Image from "next/image";

// styles import
import styles from "./styles.module.css";

type CardPropsType = {
  width?: number;
  height?: number;
  imgSource: string;
  status: string;
  title: string;
  titleSize?: string;
  path?: string;
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  profilePic?: string;
  category?: string;
  text: string;
};

const Card: React.FC<CardPropsType> = ({
  width,
  height,
  imgSource,
  status,
  title,
  titleSize,
  path,
  action,
  icon,
  profilePic,
  category,
  text,
}) => {
  if (path) {
    return (
      <Link href={path === "" ? "/" : path} passHref>
        <article className={styles.card}>
          <div className={styles.image}>
            <Image
              loading="lazy"
              src={imgSource}
              alt={title}
              width={width ? width : 300}
              height={height ? height : 150}
            />
            {profilePic && (
              <div className={styles.profile}>
                <Image width="300" height="300" src={profilePic} alt={title} />
              </div>
            )}
          </div>
          <div className={styles.body}>
            <div
              style={{
                ...(profilePic
                  ? {
                      marginTop: "3.5rem",
                      marginBottom: "0.8rem",
                      textAlign: "center",
                    }
                  : { marginBottom: "1rem", textAlign: "left" }),
              }}
              className={styles.title}
            >
              <h2 style={{ ...(titleSize ? { fontSize: titleSize } : {}) }}>
                {title}
              </h2>
              {profilePic && <h3>{status}</h3>}
            </div>
            {!profilePic && (
              <div className={styles.flex}>
                <h3>{category}</h3>
                <h3>{status}</h3>
              </div>
            )}
            <div className={styles.flex}>
              <p>{text}</p>
            </div>
          </div>
        </article>
      </Link>
    );
  } else {
    return (
      <>
        <h1>No Path</h1>
        {action && (
          <button onClick={action} className="primary">
            {icon && icon}
            {text}
          </button>
        )}
      </>
    );
  }
};

export default Card;
