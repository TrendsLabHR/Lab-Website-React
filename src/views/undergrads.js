import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContentList22 from '../components/content-list22'
import ContentList2 from '../components/content-list2'
import './undergrads.css'

const Undergrads = (props) => {
  return (
    <div className="undergrads-container">
      <Helmet>
        <title>Undergrads - Lab Website</title>
        <meta property="og:title" content="Undergrads - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/undergrads"
        />
      </Helmet>
      <ContentList22
        content2={
          <Fragment>
            <span className="undergrads-text10">
              <span>
                Tjaden Litwiler is an undergraduate student at the University of
                Pennsylvania on the pre-med track. Her interests lie in women’s
                health, health advocacy, minority maternal health, and
                neuroimaging.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="undergrads-text13">TBD</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="undergrads-text14">Tjaden </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="undergrads-text15">Lily</span>
          </Fragment>
        }
        rootClassName="content-list22root-class-name"
      ></ContentList22>
      <ContentList2
        content1={
          <Fragment>
            <span className="undergrads-text16">
              Learn more about our undergraduate and research assistants below.
              Members of our lab contribute to a wide range of projects that
              examine how brain structure, function, and mental health change
              across key reproductive and developmental transitions. Through
              hands-on involvement in data analysis, neuroimaging, clinical
              research, and computational methods, trainees play an integral
              role in advancing the lab’s mission.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="undergrads-text17">
              <span>
                Ashton Karim is an undergraduate at the University of
                Pennsylvania studying Biology with minors in Neuroscience and
                Healthcare Management. His interest in the brain and behavior
                began through coursework and was deepened by his experience as
                an Emergency Medical Responder and his involvement in psychology
                research exploring how childhood trauma and social support
                impact depression. Motivated by a personal connection to
                neurological illness and a broader interest in psychiatric risk
                and resilience. He is currently exploring applications of
                Arterial Spin Labeling in neuroimaging research and contributes
                to lab efforts supporting clinical and data-driven projects.
                Ashton ultimately hopes to pursue a career in medicine, with a
                focus on brain health and patient care.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="undergrads-text20">
              <span>
                Hudah Rana’s interest in research began in high school when she
                joined the University of Pennsylvania’s Chemistry Department as
                a research assistant. Now a rising senior majoring in Biology,
                Neuroscience, and Psychology, she has gained hands-on research
                experience through the PIGI Lab and the Cardiology and Emergency
                Departments at Penn. As a volunteer birth doula, Hudah works
                closely with pregnant women and has developed a strong interest
                in obstetrics and gynecology. Her ultimate goal is to lead
                fertility and reproductive-health research that improves
                outcomes for women.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="undergrads-text23">
              <span>
                Mahima Islam (she/her) is an undergraduate student at the
                University of Pennsylvania, majoring in Neuroscience with minors
                in Japanese and Design. Prior to joining the TReNDS Lab, she
                conducted research on lipid transfer proteins implicated in
                neurodevelopmental disorders, using genetic cloning techniques
                in model organisms. Her experiences working with patients facing
                cognitive and psychiatric challenges have fueled her interest in
                the neural basis of mental health across critical life
                transitions. She is particularly interested in how hormonal
                shifts during pregnancy influence brain structure and function,
                with the aim of identifying early neurobiological markers of
                perinatal mood disorders.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="undergrads-text26">
              <span>
                Meng Shi is a senior at the University of Pennsylvania majoring
                in Psychology with a minor in East Asian Civilizations,
                concentrating in Chinese studies. She has been a dedicated
                volunteer with the RAINN hotline for the past two years,
                providing support to survivors of sexual violence. Her research
                interests focus on maternal health, particularly depression
                during and after pregnancy. After graduation, Meng plans to take
                a gap year to gain additional research experience before
                pursuing a master’s degree in psychology in China. Her long-term
                goal is to explore how cultural context shapes experiences of
                perinatal and postpartum depression by comparing Western and
                Eastern perspectives, particularly those of the U.S. and China.
                She is especially interested in the need for more longitudinal,
                cross-cultural studies in this area and hopes to contribute to
                the development of culturally sensitive mental health care that
                can inform global maternal health policy. In the long run, Meng
                aims to work in a clinical setting, blending direct care with
                ongoing research projects, rather than pursuing a traditional
                academic career.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="undergrads-text29">
              <span>
                Anuli Okafor is a senior at the University of Pennsylvania
                majoring in Neuroscience with a minor in Consumer Psychology.
                Her experience in the clinical setting sparked an interest in
                patient-specific, culturally informed care, after witnessing how
                standardized approaches often fail to account for individual
                needs. Her goal is to find ways to contribute to the advancement
                of clinical interventions that improve maternal health outcomes,
                particularly for underrepresented groups.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="undergrads-text32">
              Undergraduate Research Assistants 
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="undergrads-text33">
              <span>Noemí Rubau Apa</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="undergrads-text37">Hudah Rana</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="undergrads-text38">
              Mahima Islam
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="undergrads-text39">
              <span>MengShi Lin</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="undergrads-text43">Anuli Okafor</span>
          </Fragment>
        }
        heading8={
          <Fragment>
            <span className="undergrads-text44">
              <span>Ashton Karim</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="content-list2root-class-name"
      ></ContentList2>
    </div>
  )
}

export default Undergrads
