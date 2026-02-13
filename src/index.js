import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Undergrads from './views/undergrads'
import TeamMemberCH from './views/team-member-ch'
import Home from './views/home'
import TeamMemberLP from './views/team-member-lp'
import Team from './views/team'
import TeamMemberDrSS from './views/team-member-dr-ss'
import JoinUs from './views/join-us'
import Publications from './views/publications'
import OurWork from './views/our-work'
import TeamMemberAF from './views/team-member-af'
import TeamMemberEb from './views/team-member-eb'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Undergrads} exact path="/undergrads" />
        <Route component={TeamMemberCH} exact path="/team-member-ch" />
        <Route component={Home} exact path="/" />
        <Route component={TeamMemberLP} exact path="/team-member-lp" />
        <Route component={Team} exact path="/team" />
        <Route component={TeamMemberDrSS} exact path="/team-member-dr-ss" />
        <Route component={JoinUs} exact path="/join-us" />
        <Route component={Publications} exact path="/publications" />
        <Route component={OurWork} exact path="/our-work" />
        <Route component={TeamMemberAF} exact path="/team-member-af" />
        <Route component={TeamMemberEb} exact path="/team-member-eb" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
