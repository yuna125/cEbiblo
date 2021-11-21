/*
 *  Main Routes Are Here .
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundaries from './components/errors/errors';
import 'semantic-ui-css/semantic.min.css';

// Local Pages and Components
import HomePage from './pages/home/homepage.component';
import ContactPage from './pages/contact/contactpage.component';
import Footer from './components/footer/footer';
import PrivacyPage from './pages/privacy/privacypage.component';
import TermsPage from './pages/terms/terms.component';
import CookiePolicy from './pages/cookie-policy/cookie-policy.component';
import SettingPage from './pages/settings/settings.component';
import createSettingsPage from './pages/settings/settings.component';
import createNewBooksTabs from './pages/newbooks/newbooks.component';
import createDraftTabs from './pages/drafts/drafts.component';
import PublishFormPage from './pages/published/publishpage.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import publishedBooksTabs from './pages/publishedBooks/publishedBooks.component';
import createstatusTabs from './pages/status/status.component';
import libraryPage from './pages/library/library.component';


function App() {
  return (
    <Router>
      <Switch>
        <ErrorBoundaries>
          <Route exact path="/" component={HomePage} forceRefresh={true} />
          {/*My Books Dashboard */}
          <Route exact path="/dashboard" component={DashboardPage} forceRefresh={true} />
          <Route exact path="/status" component={createstatusTabs} forceRefresh={true} />
          {/*My Books > Drafts */}
          <Route exact path="/drafts" component={createDraftTabs} forceRefresh={true} />
          {/*My Books > Published  <Route exact path="/published" component={PublishFormPage} forceRefresh={true} />*/}
          <Route exact path="/publishedBooks" component={publishedBooksTabs} forceRefresh={true} />
          {/*My Books > New Books */}
          <Route exact path="/newbooks" component={createNewBooksTabs} forceRefresh={true} />
          {/*Sidebar > Settings*/}
          <Route exact path="/settings" component={createSettingsPage} forceRefresh={true} />
          <Route exact path="/library" component={libraryPage} forceRefresh={true} />
          <Route exact path="/contact" component={ContactPage} forceRefresh={true} />
          <Route exact path="/privacy" component={PrivacyPage} forceRefresh={true} />
          <Route exact path="/user-agreement" component={TermsPage} forceRefresh={true} />
          <Route exact path="/cookie-policy" component={CookiePolicy} forceRefresh={true} />
          <Route exact path="/SettingPage" component={SettingPage} forceRefresh={true} />
          <Route exact path="/footer" component={Footer} forceRefresh={true} />
        </ErrorBoundaries>
      </Switch>
    </Router>
  );
}
export default App;




