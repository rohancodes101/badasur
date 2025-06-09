 const questions = [
  {
    "id": 1,
    "words": [
      { "column": 2, "text": "Poised", "info": "This is Poised" },
      { "column": 4, "text": "Eager", "info": "This is Eager" },
      { "column": 1, "text": "Alert", "info": "This is Alert" },
      { "column": 3, "text": "Ready", "info": "This is Ready" }
    ]
  },
  {
    "id": 2,
    "words": [
      { "column": 4, "text": "Prepared", "info": "This is Prepared" },
      { "column": 1, "text": "Patient", "info": "This is Patient" },
      { "column": 3, "text": "Forceful", "info": "This is Forceful" },
      { "column": 2, "text": "Diligent", "info": "This is Diligent" }
    ]
  },
  {
    "id": 3,
    "words": [
      { "column": 3, "text": "Observing", "info": "This is Observing" },
      { "column": 2, "text": "Childlike", "info": "This is Childlike" },
      { "column": 4, "text": "Realistic", "info": "This is Realistic" },
      { "column": 1, "text": "Doing", "info": "This is Doing" }
    ]
  },
  {
    "id": 4,
    "words": [
      { "column": 2, "text": "Diversifying", "info": "This is Diversifying" },
      { "column": 4, "text": "Consolidating", "info": "This is Consolidating" },
      { "column": 1, "text": "Experiencing", "info": "This is Experiencing" },
      { "column": 3, "text": "Waiting", "info": "This is Waiting" }
    ]
  },
  {
    "id": 5,
    "words": [
      { "column": 4, "text": "Playful", "info": "This is Playful" },
      { "column": 1, "text": "Reserved", "info": "This is Reserved" },
      { "column": 3, "text": "Fun-loving", "info": "This is Fun-loving" },
      { "column": 2, "text": "Serious", "info": "This is Serious" }
    ]
  },
  {
    "id": 6,
    "words": [
      { "column": 3, "text": "Pondering", "info": "This is Pondering" },
      { "column": 1, "text": "Trial & Error", "info": "This is Trial & Error" },
      { "column": 4, "text": "Evaluating", "info": "This is Evaluating" },
      { "column": 2, "text": "Alternatives", "info": "This is Alternatives" }
    ]
  },
  {
    "id": 7,
    "words": [
      { "column": 2, "text": "Divergence", "info": "This is Divergence" },
      { "column": 4, "text": "Convergence", "info": "This is Convergence" },
      { "column": 1, "text": "Action", "info": "This is Action" },
      { "column": 3, "text": "Abstract", "info": "This is Abstract" }
    ]
  },
  {
    "id": 8,
    "words": [
      { "column": 4, "text": "Practicalities", "info": "This is Practicalities" },
      { "column": 1, "text": "Direct", "info": "This is Direct" },
      { "column": 3, "text": "Conceptual", "info": "This is Conceptual" },
      { "column": 2, "text": "Possibilities", "info": "This is Possibilities" }
    ]
  },
  {
    "id": 9,
    "words": [
      { "column": 2, "text": "Changing perspectives", "info": "This is Changing perspectives" },
      { "column": 4, "text": "Focusing", "info": "This is Focusing" },
      { "column": 1, "text": "Involved", "info": "This is Involved" },
      { "column": 3, "text": "Theoretical", "info": "This is Theoretical" }
    ]
  },
  {
    "id": 10,
    "words": [
      { "column": 3, "text": "Responsible", "info": "This is Responsible" },
      { "column": 1, "text": "Quiet", "info": "This is Quiet" },
      { "column": 4, "text": "Imaginative", "info": "This is Imaginative" },
      { "column": 2, "text": "Trustworthy", "info": "This is Trustworthy" }
    ]
  },
  {
    "id": 11,
    "words": [
      { "column": 2, "text": "Visualizing", "info": "This is Visualizing" },
      { "column": 4, "text": "Zeroing-in", "info": "This is Zeroing-in" },
      { "column": 1, "text": "Implementing", "info": "This is Implementing" },
      { "column": 3, "text": "Describing", "info": "This is Describing" }
    ]
  },
  {
    "id": 12,
    "words": [
      { "column": 4, "text": "Detail-oriented", "info": "This is Detail-oriented" },
      { "column": 1, "text": "Hands-on", "info": "This is Hands-on" },
      { "column": 3, "text": "Reading", "info": "This is Reading" },
      { "column": 2, "text": "Future-oriented", "info": "This is Future-oriented" }
    ]
  },
  {
    "id": 13,
    "words": [
      { "column": 2, "text": "Creating", "info": "This is Creating" },
      { "column": 4, "text": "Deciding", "info": "This is Deciding" },
      { "column": 1, "text": "Physical", "info": "This is Physical" },
      { "column": 3, "text": "Mental", "info": "This is Mental" }
    ]
  },
  {
    "id": 14,
    "words": [
      { "column": 3, "text": "Hopeful", "info": "This is Hopeful" },
      { "column": 1, "text": "Impersonal", "info": "This is Impersonal" },
      { "column": 4, "text": "Fearful", "info": "This is Fearful" },
      { "column": 2, "text": "Options", "info": "This is Options" }
    ]
  },
  {
    "id": 15,
    "words": [
      { "column": 4, "text": "Choosing", "info": "This is Choosing" },
      { "column": 2, "text": "Proud", "info": "This is Proud" },
      { "column": 1, "text": "Judging", "info": "This is Judging" },
      { "column": 3, "text": "Thinking", "info": "This is Thinking" }
    ]
  },
  {
    "id": 16,
    "words": [
      { "column": 1, "text": "Handling", "info": "This is Handling" },
      { "column": 3, "text": "Contemplating", "info": "This is Contemplating" },
      { "column": 2, "text": "Transforming", "info": "This is Transforming" },
      { "column": 4, "text": "Procrastinating", "info": "This is Procrastinating" }
    ]
  },
  {
    "id": 17,
    "words": [
      { "column": 4, "text": "Making sure", "info": "This is Making sure" },
      { "column": 1, "text": "Sympathetic", "info": "This is Sympathetic" },
      { "column": 3, "text": "Emotional", "info": "This is Emotional" },
      { "column": 2, "text": "Speculating", "info": "This is Speculating" }
    ]
  },
  {
    "id": 18,
    "words": [
      { "column": 2, "text": "Pragmatic", "info": "This is Pragmatic" },
      { "column": 4, "text": "Reflection", "info": "This is Reflection" },
      { "column": 1, "text": "Contact", "info": "This is Contact" },
      { "column": 3, "text": "Novelizing", "info": "This is Novelizing" }
    ]
  }
]

export default questions;
