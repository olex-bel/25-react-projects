
import Accordion from "./components/Accordion"

function App() {

  return (
    <>
      <div className="w-96 m-4">
        <Accordion>
            <Accordion.Item itemId="first-item">
              <Accordion.Header className="font-semibold">The first item</Accordion.Header>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item itemId="second-item">
              <Accordion.Header className="font-semibold">The second item</Accordion.Header>
              <Accordion.Content>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item itemId="third-item">
              <Accordion.Header className="font-semibold">The third item</Accordion.Header>
              <Accordion.Content>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </Accordion.Content>
            </Accordion.Item>
        </Accordion>
      </div>
    </>
  )
}

export default App
