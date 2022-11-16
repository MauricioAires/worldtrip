import styled from 'styled-components'

export const SliderWrapper = styled.div`
  width: 100%;

  .swiper-button-next {
    right: 20px;
  }
  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #ffba08;
    font-size: 32px;
    font-weight: bold;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background: #999999;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #ffba08;
  }
`
