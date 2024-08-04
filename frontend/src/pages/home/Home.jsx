import Sidebar from "../../components/sidebar/SideBar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (
    <div className="homeContainer">
        <div className="homeSidebarContainer">
			<Sidebar />
            </div>
            <div className="homeMessageContainer">
			<MessageContainer />
            </div>
		</div>
  )
}

export default Home
