import styles from '../blog/blog.module.css';

const notes = [
    {
        title: "AWS Dev Cert Prep",
        link: "https://invincible-moat-f89.notion.site/AWS-Dev-Cert-Notes-0ba566963b08401b9ba42e37b794077f?pvs=4",
    },
    {
        title: "System Design Concepts",
        link: "https://invincible-moat-f89.notion.site/SysDesign-Examples-f1654d15cca8411e904fece3d90de62f?pvs=4",
    },
    {
      title: "Data Structures and Algorithms",
      link: "https://invincible-moat-f89.notion.site/Interview-CheatSheet-dbad3afb81224446b3ebc5d7ca75d39b?pvs=4",
    },
    {
      title: "Some stuff on encoder-decoder models",
      link: "https://invincible-moat-f89.notion.site/NEURAL-MACHINE-TRANSLATION-BY-JOINTLY-LEARNING-TO-ALIGN-AND-TRANSLATE-5124b18821f041af8188efb0ae00afea?pvs=4",
    },
    {
        title:"Some notes on Diffusion Models",
        link: "https://invincible-moat-f89.notion.site/Stable-Diffusion-Notes-b3db0bea9c794fae8002ef7a30dfa1f0?pvs=4"
    }
    // Add more articles here
];

export default function Page() {
  return (
      <div className={styles.container}>
          <p className={styles.subtitle}>technical notes on some of my favorite topics</p>
          <div className={styles.grid}>
              {notes.map((article, index) => (
                  <a key={index} href={article.link} className={styles.card}>
                      <h2 className={styles.cardTitle}>{article.title}</h2>
                      
                  </a>
              ))}
          </div>
      </div>
  );
}