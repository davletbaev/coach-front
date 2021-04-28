import React from 'react';

import Container from '~components/Container';
import Icon from '~components/Icon';

import * as styles from './Guarantees.module.css';

const Guarantees = () => (
  <Container
    type="section"
    className={ styles.guarantees }
  >
    <h3 className={ styles.heading }>
        За время коучинга<br /> ты гарантированно:
    </h3>

    <ul className={ styles.list }>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="stock"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Увеличишь чистую прибыль минимум в 2 раза</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="timing"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Сократишь время работы в несколько раз</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="yinyang"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Найдешь баланс между работой и личной жизнью</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="startup"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Реализуешь новые стратегии по развитию бизнеса, проектов</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="group"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Привлечешь новых клиентов</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="smile"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Научишься управлять своей мотивацией</p>
      </li>
      <li>
        <div className={ styles.badge }>
          <Icon
            className={ styles.icon }
            icon="growth"
            width="48"
            height="48"
          />
        </div>
        <p className={ styles.label }>Повысишь самооценку</p>
      </li>
    </ul>
  </Container>
);

export default Guarantees;