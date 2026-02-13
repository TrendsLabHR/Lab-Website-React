import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list22.css'

const ContentList22 = (props) => {
  return (
    <div
      className={`content-list22-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list22-thq-max-width-elm thq-flex-column thq-section-max-width">
        <div className="content-list22-thq-content-elm1 thq-flex-column">
          <ul>
            <li className="content-list22-li1 thq-flex-column list-item">
              <ul className="content-list22-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list22-text2">Tjaden </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list22-text3">
                          Lorem ipsum dolor sit amet. Nam nihil facilis sit
                          consequuntur internos qui minima rerum ut molestias
                          laudantium aut iusto deserunt. Aut voluptatibus
                          excepturi qui officia laudantium est repellendus
                          tempore hic sunt debitis. Ut galisum tempore in enim
                          fugit eum pariatur possimus est tenetur nemo et sint
                          sint et dolores Quis. Aut illum perspiciatis rem
                          architecto culpa et fuga aliquid. Est omnis
                          praesentium ut nisi internos rem quod totam et
                          similique quis. Est tempore cumque aut recusandae
                          labore qui error molestiae et possimus quia! Eum Quis
                          asperiores non nihil tempora qui quia voluptatem aut
                          aspernatur aspernatur aut asperiores labore et
                          sapiente quaerat qui suscipit quia. Ea nesciunt iste
                          aut temporibus culpa sit dignissimos quaerat eum
                          architecto voluptatum et nemo velit At harum harum.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list22-text4">Lily</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list22-text1">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list22-thq-content-elm2 thq-flex-column">
          <ul>
            <li className="content-list22-li4 thq-flex-column list-item"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList22.defaultProps = {
  content3: undefined,
  rootClassName: '',
  heading2: undefined,
  content2: undefined,
  heading3: undefined,
}

ContentList22.propTypes = {
  content3: PropTypes.element,
  rootClassName: PropTypes.string,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  heading3: PropTypes.element,
}

export default ContentList22
