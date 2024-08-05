import styles from './blog.module.css';

const articles = [
    {
        title: "Why is Everything Better in Europe?",
        link: "https://asapsach.substack.com/p/why-is-everything-is-better-in-europe",
    },
    {
        title: "What Am I Supposed to Do",
        link: "https://asapsach.substack.com/p/what-am-i-supposed-to-do",
    },
    // Add more articles here
];

export default function Page() {
  return (
      <div className={styles.container}>
          <p className={styles.subtitle}>a collection of stuff i have written on substack</p>
          <div className={styles.grid}>
              {articles.map((article, index) => (
                  <a key={index} href={article.link} className={styles.card}>
                      <h2 className={styles.cardTitle}>{article.title}</h2>
                      
                  </a>
              ))}
          </div>
      </div>
  );
}