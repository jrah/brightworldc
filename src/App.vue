<template>
  <div id="app">
    <pre>
      oldArray: {{oldArr.length}}
      newArr (modified files): {{newArr.length}}
      Final Output: {{finalOutput.length}}
      Difference {{finalOutput.length - oldArr.length}}

    </pre>
    <vue-blob-json-csv
      tag-name="div"
      file-type="json"
      file-name="output"
      title="Download JSON"
      :data="merge(oldArr, newArr)"
      confirm="Do you want to download it?"
    />
    <pre v-for="(item, i) in finalOutput" :key="i">
      {{item.type}}
      {{item.uid}}
      {{item.meta_title}}
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
      const AandB = [...oldArr, ...newArr];
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
  },
};
</script>