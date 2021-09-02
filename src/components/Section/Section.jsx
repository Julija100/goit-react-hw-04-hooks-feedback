import styles from '../Section/Section.module.css'
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title:PropTypes.string,
}

export default Section;
