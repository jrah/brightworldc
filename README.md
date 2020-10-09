jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' sample_data.json | while read -r key; do
  fname=$(jq --raw-output ".[$key].billingAccountNumber" sample_data.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done


jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' input.json | while read -r key; do
  fname=$(jq --raw-output ".[$key].hash" input.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done

jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' sample_data2.json | while read -r key; do
  fname=$(jq --raw-output ".[$key].grouplang" sample_data2.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done



remove h1s
^.*h1.*\n

^.*grouplang.*\n

// remove hash
"hash":"[^"]+"

replace apply for place at ... university with apply for guardianship

On the input json 

"text": "apply for a place at (.+?)University
"text": "apply for guardianship at ($0)University

Check:

The University of Edinburgh
Leeds Trinity
Bangor University
Royal Holloway, University of London
The University of Northampton
Loughborough University

"grouplang"
jq -n '
  [inputs
   | {(input_filename | gsub(".*/|\\.json$";"")): .}]
  | add' *.json
done

jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' input.json | while read -r key; do
  fname=$(jq -n '
  [inputs
   | {(input_filename | gsub(".*/|\\.json$";"")): .}]
  | add' *.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done

jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' input.json | while read -r key; do
  fname=$(jq -n '
  [inputs
   | {(input_filename | gsub(".*/|\\.json$";"")): .}]
  | add' *.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done




jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' manifest.json | while read -r key; do
  fname=$(jq -n '
  [inputs
   | {(input_filename | gsub(".*/|\\.json$";"")): .}]
  | add' *.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done

jq '{(input_filename | gsub(".*/|\\.json$";"")): .}' ./*.json | jq -s 'add' > bigarray.json

// Use this to add hash to key from original list of documents (remember to encase in array, see goodexample.json)

jq '[{(input_filename | gsub(".*/|\\.json$";"")): .}]' ./*.json | jq -s 'add' > barray.json


echo '{"hello": "world"}' | jq --arg foo bar '. + {hello: ("not" + $foo)}' > barray.json

echo '{"hello": "world"} ' | jq --arg foo bar '. + {hello: ("not" + $foo)}' > barray.json

jq '[.]' ./*.json | jq -s 'add' > barray.json


jq '{"hello": "hello"}' ./*.json | jq -s 'add' > barray.json

jq '.+= {"date": "2010-01-07T19:55:99.999Z", "xml": "xml_samplesheet_2017_01_07_run_09.xml", "status": "OKKK", "message": "metadata loaded into iRODS successfullyyyyy"}' ./*.json | jq -s 'add' > barray.json

jq '[.+= { "hash": (input_filename | gsub(".*/|\\.json$";""))}]' ./*.json | jq -s 'add' > barray.json


// // Use this to add hash to key from original list of documents (remember to encase in array, see goodexample.json), and then remove the hash when migration is complete. 

jq '[.+= { "hash": (input_filename | gsub(".*/|\\.json$";""))}]' ./*.json | jq -s 'add' > original_hash.json

then replace all uid so that they are objects inside an array. (might not need to do this)
  ],
  "uid":

    ]
},
{
  "uid": 

in bigarray:

find

"
  },

  replace

  "
    },
    {

Finally copy the grouped big file with the new data into production ready, and divide them using the hash.

jq -cr 'keys[] as $k | "\($k)\n\(.[$k])"' input.json | while read -r key; do
  fname=$(jq --raw-output ".[$key].hash" input.json)
  read -r item
  printf '%s\n' "$item" > "./$fname.json"
done

Delete the hash in all the files

// remove hash
"hash":"[^"]+"