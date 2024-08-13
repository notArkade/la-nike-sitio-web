import { Hero, CustomerReviews, SpecialOffers, Footer, PopularProducts, Subscribe, Services, SuperQuality} from "./sections";
import Nav from "./Components/Nav";

const App = ()=> (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-gray-800 padding-x padding-t pb-8">
     <Footer />
    </section>
  </main>
);

export default App;