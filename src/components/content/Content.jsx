import Card from '../card/Card';
import Stars from '../stars/Stars';
import c from './Content.module.scss';

const Content = () => {
  return (
    <section className={c.content}>
      <div className={c['content__container']}>
        <div className={c['content__container-text']}>
          <h1 className={c['content__title']}>
            10,000+ of our users love our products.
          </h1>
          <p className={c['content__paragraph']}>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <section className={c['content__stars']}>
          <Stars text={'Rated 5 Stars in Reviews'} />
          <Stars text={'Rated 5 Stars in Report Guru'} />
          <Stars text={'Rated 5 Stars in BestTech'} />
        </section>
      </div>
      <section className={c['content__cards']}>
        <Card
          className={c['content__cards-card']}
          name={'Colton Smith'}
          img={'images/image-colton.webp'}
          text={`“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”`}
        />
        <Card
          className={c['content__cards-card']}
          name={'Irene Roberts'}
          img={'images/image-irene.webp'}
          text={`“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. ”`}
        />
        <Card
          className={c['content__cards-card']}
          name={'Anne Wallace'}
          img={'images/image-anne.webp'}
          text={`“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”`}
        />
      </section>
    </section>
  );
};

export default Content;
