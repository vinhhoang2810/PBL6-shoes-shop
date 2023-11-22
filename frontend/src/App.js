import TopNav from '~/components/TopNav/TopNav';
import SideNav from '~/components/SideNav/SideNav';
import Dashboard from '~/components/Dashboard';

function App() {
    return (
        <div>
            <TopNav />
            <SideNav />
            <main>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
