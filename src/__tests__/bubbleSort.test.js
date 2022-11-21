import bubbleSort from "../bubbleSort"

test("bubble sort array", function() {

    const foo = [65, 55, 45, 35, 25, 15, 10];
    expect(bubbleSort(foo)).toEqual([10, 15, 25, 35, 45, 55, 65]);
   
});

