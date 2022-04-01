import dva from 'dva';
import 'utils/flexible.js';
// import './index.css';

const app = dva();

// Model
app.model(require('./models/leftPage').default);
app.model(require('./models/centerPage').default);
app.model(require('./models/rightPage.js').default);

app.router(require('./router').default);
app.start('#root');
