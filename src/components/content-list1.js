import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-thq-max-width-elm thq-section-max-width">
        <div className="content-list1-thq-content-elm thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list1-thq-heading1-elm thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list1-text17">
                      Privacy statement
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list1-text15">
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
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list1-text10">
                      Types of data we collect
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list1-text11">
                      Lorem ipsum dolor sit amet. Nam nihil facilis sit
                      consequuntur internos qui minima rerum ut molestias
                      laudantium aut iusto deserunt. Aut voluptatibus excepturi
                      qui officia laudantium est repellendus tempore hic sunt
                      debitis. Ut galisum tempore in enim fugit eum pariatur
                      possimus est tenetur nemo et sint sint et dolores Quis.
                      Aut illum perspiciatis rem architecto culpa et fuga
                      aliquid. Est omnis praesentium ut nisi internos rem quod
                      totam et similique quis. Est tempore cumque aut recusandae
                      labore qui error molestiae et possimus quia! Eum Quis
                      asperiores non nihil tempora qui quia voluptatem aut
                      aspernatur aspernatur aut asperiores labore et sapiente
                      quaerat qui suscipit quia. Ea nesciunt iste aut temporibus
                      culpa sit dignissimos quaerat eum architecto voluptatum et
                      nemo velit At harum harum.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list1-text13">
                      How we use your data
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list1-text19">
                      Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                      aliquam tempore aut ipsam iusto in sunt repellat ex
                      voluptatum inventore ab facilis galisum ea consequatur
                      consequuntur. Ab voluptas voluptatem eum consequatur
                      aspernatur non laboriosam atque est labore asperiores a
                      neque quos. Ea nemo modi hic dicta saepe et veritatis
                      maiores At praesentium aliquid. Sed dolores architecto non
                      doloribus quia eos consectetur commodi non tenetur vitae
                      est neque omnis. Non perspiciatis velit At aliquam rerum
                      ut officiis ipsa id minima eius ut sapiente nobis et nemo
                      neque. Aut maiores tempora in officiis sunt eum voluptatem
                      tenetur sit iste reprehenderit ea nisi dolor. Ea impedit
                      omnis ad internos autem ut esse sunt ad saepe maiores vel
                      perferendis veritatis. Ex magni fugiat ut reprehenderit
                      laudantium sit galisum ipsam eos tempora doloribus sed
                      accusantium nobis eum praesentium quod.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list1-text21">
                      Sharing your data with 3rd parties
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list1-text14">
                      Lorem ipsum dolor sit amet. Id galisum officiis rem quod
                      internos qui provident quaerat hic minus eveniet est
                      officiis galisum sit rerum dignissimos. Sit voluptatem
                      alias et veniam rerum ea quod ipsam ut quam neque est
                      nihil repellat est aspernatur voluptatem est voluptas
                      ratione? Ea vero tempore At soluta temporibus 33 galisum
                      excepturi quo modi distinctio. Qui dolor soluta sit ipsam
                      vitae et suscipit molestiae est consequatur galisum aut
                      sapiente voluptatem sed quas eaque et minima minus? Rem
                      soluta consequatur et velit cupiditate sed eligendi
                      laudantium rem pariatur galisum sit mollitia debitis eum
                      delectus ipsum aut consequatur mollitia. Qui voluptatibus
                      molestias ut totam Quis ea unde dolorem sit animi eveniet
                      et galisum explicabo. Est culpa error ut voluptatibus
                      voluptatem qui dignissimos dolorem quo laborum distinctio
                      qui omnis perspiciatis ab facilis temporibus qui
                      perspiciatis consectetur. Ab praesentium fugiat eos
                      veritatis quam ex modi autem et sapiente dolorem?
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list1-text12">
                      Campaign tracking
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list1-text18">
                      Lorem ipsum dolor sit amet. Ut cumque cupiditate eos
                      perferendis tempora et ullam quis qui fugiat
                      necessitatibus qui quia dolorem 33 earum reprehenderit eum
                      rerum blanditiis. Et vitae distinctio 33 magni ratione ut
                      odit rerum est nihil error et minus dolor quo harum
                      fugiat. Eos quam assumenda id fugit optio aut magni sunt!
                      Ut iure aliquam vel velit modi sit voluptatibus atque ut
                      corporis sint sit omnis enim a pariatur officiis aut nulla
                      voluptate. In facere incidunt aut sapiente maxime qui
                      quibusdam facilis non officia consectetur sit laboriosam
                      libero aut cupiditate possimus ut sunt reiciendis. Et
                      repudiandae magnam aut quaerat ipsam aut repellat
                      laboriosam. Ab facilis deleniti ut voluptas molestiae sed
                      omnis maiores ut aliquid culpa vel nesciunt saepe. Aut
                      placeat aspernatur aut alias nihil vel neque recusandae et
                      corrupti accusantium ab quod temporibus ut nulla eaque et
                      magnam nemo. Ad sunt minus rem earum delectus hic officia
                      iste qui sunt quos non officiis illo vel doloribus
                      perspiciatis. Ab soluta eius sed quidem dolores rem
                      necessitatibus minus 33 minus commodi. Nam repudiandae
                      libero non laboriosam voluptate et saepe fuga vel
                      repudiandae pariatur aut assumenda illo.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list1-text20">Cookies</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list1-text16">
                      Ut doloremque aliquam qui veniam deserunt sit voluptates
                      iusto et unde quod ut quam unde ut nemo eius! Ut saepe
                      consequuntur non quibusdam soluta aut maiores eaque et
                      rerum error nam incidunt saepe aut nihil voluptatem. 33
                      nulla quaerat est doloremque voluptatem ut libero magnam
                      id placeat aliquid. Ea minus totam est inventore minus sed
                      temporibus aperiam At ratione maiores eum libero
                      consequatur aut laborum exercitationem.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  heading2: undefined,
  content2: undefined,
  heading5: undefined,
  heading3: undefined,
  content4: undefined,
  content1: undefined,
  content6: undefined,
  heading1: undefined,
  content5: undefined,
  content3: undefined,
  heading6: undefined,
  heading4: undefined,
}

ContentList1.propTypes = {
  heading2: PropTypes.element,
  content2: PropTypes.element,
  heading5: PropTypes.element,
  heading3: PropTypes.element,
  content4: PropTypes.element,
  content1: PropTypes.element,
  content6: PropTypes.element,
  heading1: PropTypes.element,
  content5: PropTypes.element,
  content3: PropTypes.element,
  heading6: PropTypes.element,
  heading4: PropTypes.element,
}

export default ContentList1
