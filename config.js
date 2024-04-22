import DashboardScreen from './screens/Dashboard'
import ClientsScreen from './screens/Clients'
import OnboardClientScreen from './screens/OnboardClient'
import MyTeamScreen from './screens/MyTeam'
import ExerciseBuilderScreen from './screens/ExerciseBuilder'
import QuotesPlannerScreen from './screens/QuotesPlanner'
import ResetPasswordScreen from './screens/ResetPassword'
import ClientDetailsScreen from './screens/ClientDetails'
import TaskBuilderScreen from './screens/TaskBuilder'
import ColleagueDetailsScreen from './screens/ColleagueDetails'
import EditColleagueScreen from './screens/EditColleague'
import ExerciseExecution from './screens/ExerciseExecution'

export const apiBaseUrl = 'http://localhost:3001'

export const userRoutes = [
  {name: 'Dashboard', component: DashboardScreen},
  {name: 'Reset Password', component: ResetPasswordScreen},
  {name: 'Exercise Execution', component: ExerciseExecution}
]

export const adminRoutes = [
  {name: 'Clients', component: ClientsScreen},
  {name: 'Onboard Client', component: OnboardClientScreen},
  {name: 'My Team', component: MyTeamScreen},
  {name: 'Exercise Builder', component: ExerciseBuilderScreen},
  {name: 'Task Builder', component: TaskBuilderScreen},
  {name: 'Quotes Planner', component: QuotesPlannerScreen},
  {name: 'Reset Password', component: ResetPasswordScreen},
  {name: 'Client Details', component: ClientDetailsScreen},
  {name: 'Colleagues Details', component: ColleagueDetailsScreen},
  {name: 'Edit Colleague', component: EditColleagueScreen}
]

export const visibleInMenuLinksForUser = [{name: 'Dashboard'}, {name: 'Reset Password'}]

export const visibleInMenuLinksForAdmin = [
  {name: 'Clients'},
  {name: 'Onboard Client'},
  {name: 'My Team'},
  {name: 'Exercise Builder'},
  {name: 'Task Builder'},
  {name: 'Quotes Planner'},
  {name: 'Reset Password'}
]
