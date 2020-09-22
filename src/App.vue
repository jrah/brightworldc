<template>
  <div id="app">
    <span class="convert">
      <vue-blob-json-csv
        tag-name="div"
        file-type="json"
        file-name="output"
        title="Download JSON"
        :data="merge(oldArr, newArr)"
        confirm="Do you want to download it?"
      />
    </span>
    <pre>
      oldArray: {{oldArr.length}}
      newArr (modified files): {{newArr.length}}
      Final Output: {{finalOutput.length}}
      Difference {{finalOutput.length - oldArr.length}}
      Difference {{oldArr.length - newArr.length}}

      simpleMerge: {{simpleMerge(oldArr, newArr).length}}
      Merge: {{merge(oldArr, newArr).length}}
      Compare:{{ compareArray(merge(oldArr, newArr), oldArr ).length}}
</pre>
  <pre
      style="color: red;"
      v-for="(item, j) in compareArray(merge(oldArr, newArr), oldArr )"
      :key="j"
    >
      {{item.type}}
      {{item.uid}}
      {{item.meta_title}}
    </pre>
  <!-- 
    <pre style="color: blue;" v-for="(item, j) in newArr" :key="j">
      {{item.type}}
      {{item.uid}}
      {{item.meta_title}}
    </pre> -->

    <pre v-for="(item, i) in merge(oldArr, newArr)" :key="i">
      {{item.type}}
      {{item.uid}}
      {{item.meta_title}}
      {{item.header_title}}
    </pre>
  </div>
</template>

<script>
import finalOutput from "./output.json";
import oldArr from "./input/old.json";
import newArr from "./input/new.json";

export default {
  name: "App",
  data() {
    return {
      obj: {},
      oldArr: oldArr,
      newArr: newArr,
      finalOutput: finalOutput,
    };
  },
  components: {
    // HelloWorld,
    // VueBlobJsonCsv,
  },
  methods: {
    simpleMerge(oldArr, newArr) {
      const AandB = [...newArr, ...oldArr];
      console.log(AandB); // [ 44, 33, 22, 33, 22, 11 ]
      const distinctValuesInAandBSet = new Set(AandB);
      console.log(distinctValuesInAandBSet); // Set { 44, 33, 22, 11 }
      const setToArray = [...distinctValuesInAandBSet];
      return setToArray;
    },
    merge(oldArr, newArr) {
      const mergedArr = [...newArr, ...oldArr];
      let set = new Set();
      let unionArr = mergedArr.filter((item) => {
        if (!set.has(item.uid)) {
          set.add(item.uid);
          return true;
        }
        return false;
      }, set);
      return unionArr;
    },
    compareArray(arr1, arr2) {
      const difference = arr1.filter(
        (item1) => !arr2.some((item2) => item2.meta_title === item1.meta_title)
      );
      return difference;
    },
    mapArr(arr) {
      return arr.map((item) => {
        return {
          ...item,
          header_title: [
            {
              type: "heading1",
              content: {
                text: item.h1,
                spans: [],
              },
            },
          ],
        };
      });
    },
  },
};
</script>

<style lang="css">
.convert {
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  background-color: #7957d5;
  border-color: transparent;
  color: #fff;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
  position: relative;
  vertical-align: top;
}
</style>