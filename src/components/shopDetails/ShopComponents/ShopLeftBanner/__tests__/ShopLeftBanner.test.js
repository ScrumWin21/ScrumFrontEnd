import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ColorBox } from '../ShopFilterByColorColorBox';

afterEach(() => {
    cleanup();

});

    //Test to show that colors will loop through array and display correctly

test('DisplayCorrectColors', () => {

    let shopData = [
        {
          color: "#000000",
          text: "Black",
          count: 12,
        },
        {
          color: "#EEEEEE",
          text: "Gray",
          count: 20,
        },
        {
          color: "#FF2D2D",
          text: "Red",
          count: 18,
        },
        {
          color: "#64CB83",
          text: "Green",
          count: 25,
        },
        {
          color: "#FFAA00",
          text: "Orange",
          count: 9,
        },
        {
          color: "#542323",
          text: "Brown",
          count: 7,
        },
      ];
    render(<ColorBox data={{shopData}}/>)

    const filterByColorElement = screen.getByTestId('DisplayColor');
    expect(filterByColorElement).toBeInTheDocument();
})



