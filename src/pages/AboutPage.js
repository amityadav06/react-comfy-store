import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="hero" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            hic vitae laboriosam laudantium repellat repudiandae ad optio dicta,
            perspiciatis cupiditate enim incidunt suscipit nulla velit fugiat,
            sit saepe architecto ut quibusdam officia voluptatibus nesciunt
            perferendis? Nesciunt, obcaecati pariatur. Quibusdam, vitae sit
            veritatis recusandae ipsam dolor impedit deleniti ex, et sequi minus
            odio delectus, nobis ratione. Quis repudiandae architecto amet
            veritatis animi, sequi voluptatem beatae provident sed nam facere
            recusandae quidem assumenda reprehenderit, accusamus error
            temporibus quod magnam harum eum porro?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
