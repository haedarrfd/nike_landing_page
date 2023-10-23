import { Navbar, Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer }
  from '@/layout';

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />

      <section className='xl:padding_l wide:padding_r padding_b'>
        <Hero />
      </section>

      <section className='padding'>
        <PopularProducts />
      </section>

      <section className='padding'>
        <SuperQuality />
      </section>

      <section className='padding_x py-10'>
        <Services />
      </section>

      <section className='padding'>
        <SpecialOffer />
      </section>

      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      <section className='padding_x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>

      <section className='bg-black padding_x padding_t pb-8'>
        <Footer />
      </section>
    </main>
  )
}
