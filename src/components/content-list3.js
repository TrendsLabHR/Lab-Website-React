import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list3.css'

const ContentList3 = (props) => {
  return (
    <div className="content-list3-container thq-section-padding">
      <div className="content-list3-thq-max-width-elm thq-flex-column thq-section-max-width">
        <div className="content-list3-thq-content-elm1 thq-flex-column">
          <ul>
            <li className="content-list3-li10 thq-flex-column list-item">
              <h2 className="content-list3-thq-heading1-elm thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list3-text25">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-thq-content1-elm thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list3-text33">Prop Content</span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list3-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list3-text26">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list3-text22">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list3-text18">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list3-text32">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="content-list3-text16">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="content-list3-text34">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list3-text10">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list3-text29">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list3-text23">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list3-text20">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list3-thq-content-elm2 thq-flex-column">
          <ul>
            <li className="content-list3-li16 thq-flex-column list-item">
              <h2 className="content-list3-thq-heading7-elm thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list3-text31">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-thq-content7-elm thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list3-text19">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list3-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="content-list3-text11">
                          General Terms and Conditions
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list3-text22">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="content-list3-text21">
                          Products and Services
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content9 ?? (
                      <Fragment>
                        <span className="content-list3-text30">
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
        <div className="content-list3-thq-content-elm3 thq-flex-column">
          <ul>
            <li className="content-list3-li19 thq-flex-column list-item">
              <h2 className="content-list3-thq-heading10-elm thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list3-text17">Refund Policy</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-thq-content10-elm thq-body-small">
                {props.content10 ?? (
                  <Fragment>
                    <span className="content-list3-text27">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list3-ul6 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading11 ?? (
                      <Fragment>
                        <span className="content-list3-text13">General</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content11 ?? (
                      <Fragment>
                        <span className="content-list3-text12">
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
                    {props.heading12 ?? (
                      <Fragment>
                        <span className="content-list3-text28">
                          Damages and issues
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content12 ?? (
                      <Fragment>
                        <span className="content-list3-text15">
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
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading13 ?? (
                      <Fragment>
                        <span className="content-list3-text24">Refunds</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content13 ?? (
                      <Fragment>
                        <span className="content-list3-text14">
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
      </div>
    </div>
  )
}

ContentList3.defaultProps = {
  heading5: undefined,
  heading8: undefined,
  content11: undefined,
  heading11: undefined,
  content13: undefined,
  content12: undefined,
  heading4: undefined,
  heading10: undefined,
  heading3: undefined,
  content7: undefined,
  content6: undefined,
  heading9: undefined,
  content2: undefined,
  heading6: undefined,
  heading13: undefined,
  heading1: undefined,
  heading2: undefined,
  content10: undefined,
  heading12: undefined,
  content5: undefined,
  content9: undefined,
  heading7: undefined,
  content3: undefined,
  content1: undefined,
  content4: undefined,
}

ContentList3.propTypes = {
  heading5: PropTypes.element,
  heading8: PropTypes.element,
  content11: PropTypes.element,
  heading11: PropTypes.element,
  content13: PropTypes.element,
  content12: PropTypes.element,
  heading4: PropTypes.element,
  heading10: PropTypes.element,
  heading3: PropTypes.element,
  content7: PropTypes.element,
  content6: PropTypes.element,
  heading9: PropTypes.element,
  content2: PropTypes.element,
  heading6: PropTypes.element,
  heading13: PropTypes.element,
  heading1: PropTypes.element,
  heading2: PropTypes.element,
  content10: PropTypes.element,
  heading12: PropTypes.element,
  content5: PropTypes.element,
  content9: PropTypes.element,
  heading7: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  content4: PropTypes.element,
}

export default ContentList3
