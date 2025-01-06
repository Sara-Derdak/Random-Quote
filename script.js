const quotes = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
      translations: {
        fr: "La seule limite à notre réalisation de demain est nos doutes d'aujourd'hui.",
        ar: "الحد الوحيد لتحقيقنا غدًا هو شكوكنا اليوم."
      }
    },
    {
      text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats",
      translations: {
        fr: "Ne attendez pas que le fer soit chaud pour frapper, mais rendez-le chaud en frappant.",
        ar: "لا تنتظر ضرب الحديد حتى يصبح حارًا، ولكن اجعله حارًا بالضرب."
      }
    },
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
      translations: {
        fr: "La vie est composée à 10 % de ce qui nous arrive et à 90 % de la façon dont nous y réagissons.",
        ar: "الحياة هي 10٪ مما يحدث لنا و 90٪ كيف نتفاعل معه."
      }
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      translations: {
        fr: "La meilleure façon de prédire l'avenir est de l'inventer.",
        ar: "أفضل طريقة للتنبؤ بالمستقبل هي اختراعه."
      }
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
      translations: {
        fr: "En deux mots, je peux résumer tout ce que j'ai appris sur la vie : elle continue.",
        ar: "في كلمتين يمكنني تلخيص كل شيء تعلمته عن الحياة: الحياة تستمر."
      }
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot",
      translations: {
        fr: "Il n'est jamais trop tard pour être ce que vous auriez pu être.",
        ar: "ليس هناك وقت متأخر لتكون ما كنت قد تصبح."
      }
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
      translations: {
        fr: "Vous devez être le changement que vous souhaitez voir dans le monde.",
        ar: "يجب أن تكون التغيير الذي ترغب في رؤيته في العالم."
      }
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      translations: {
        fr: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
        ar: "النجاح ليس نهائيًا، والفشل ليس مميتًا: الشجاعة على الاستمرار هي التي تهم."
      }
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      translations: {
        fr: "Être soi-même dans un monde qui essaie constamment de vous transformer en quelque chose d'autre est le plus grand accomplissement.",
        ar: "أن تكون نفسك في عالم يحاول باستمرار جعلك شيئًا آخر هو أعظم إنجاز."
      }
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
      translations: {
        fr: "Vous manquez 100 % des tirs que vous ne tentez pas.",
        ar: "أنت تفوت 100% من الفرص التي لا تأخذها."
      }
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      translations: {
        fr: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        ar: "الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله."
      }
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      translations: {
        fr: "Croyez que vous pouvez et vous êtes à mi-chemin.",
        ar: "صدق أنك تستطيع وأنت في منتصف الطريق."
      }
    },
    {
      text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      author: "Ralph Waldo Emerson",
      translations: {
        fr: "Le but de la vie n'est pas d'être heureux. Il s'agit d'être utile, honorable, compatissant et de faire en sorte que votre vie ait eu un impact.",
        ar: "غرض الحياة ليس أن تكون سعيدًا. إنه أن تكون مفيدًا، شريفًا، رحيمًا، وأن تترك أثرًا في حياتك."
      }
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      translations: {
        fr: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.",
        ar: "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم."
      }
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
      translations: {
        fr: "Ce qui se trouve derrière nous et ce qui se trouve devant nous sont de petites choses comparées à ce qui se trouve en nous.",
        ar: "ما وراءنا وما أمامنا هي أمور صغيرة مقارنة بما داخلنا."
      }
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      translations: {
        fr: "Peu importe la vitesse à laquelle vous allez tant que vous ne vous arrêtez pas.",
        ar: "لا يهم كم بطيئًا تذهب طالما أنك لا تتوقف."
      }
    },
    {
      text: "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
      translations: {
        fr: "Nos vies commencent à se terminer le jour où nous devenons silencieux sur les choses qui comptent.",
        ar: "تبدأ حياتنا في الانتهاء في اليوم الذي نصبح فيه صامتين عن الأشياء التي تهم."
      }
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama",
      translations: {
        fr: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
        ar: "السعادة ليست شيئًا جاهزًا. إنها تأتي من أفعالك الخاصة."
      }
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      translations: {
        fr: "La plus grande gloire de la vie ne réside pas dans le fait de ne jamais tomber, mais dans le fait de se relever chaque fois que nous tombons.",
        ar: "أعظم مجد في الحياة ليس في عدم السقوط أبدًا، ولكن في النهوض في كل مرة نسقط فيها."
      }
    },
    {
      text: "If you want to go fast, go alone. If you want to go far, go together.",
      author: "African Proverb",
      translations: {
        fr: "Si vous voulez aller vite, allez seul. Si vous voulez aller loin, allez ensemble.",
        ar: "إذا كنت تريد أن تذهب بسرعة، اذهب وحدك. إذا كنت تريد أن تذهب بعيدًا، اذهب معًا."
      }
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        translations: {
          fr: "Le secret pour aller de l'avant est de commencer.",
          ar: "سر التقدم هو البدء."
        }
      },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        translations: {
          fr: "Le succès vient généralement à ceux qui sont trop occupés pour le chercher.",
          ar: "النجاح عادةً ما يأتي لأولئك الذين هم مشغولون جدًا للبحث عنه."
        }
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      translations: {
        fr: "Peu importe la vitesse à laquelle vous allez tant que vous ne vous arrêtez pas.",
        ar: "لا يهم كم بطيئًا تذهب طالما أنك لا تتوقف."
      }
    },
    {
      text: "Everything you can imagine is real.",
      author: "Pablo Picasso",
      translations: {
        fr: "Tout ce que vous pouvez imaginer est réel.",
        ar: "كل شيء يمكنك تخيله هو حقيقي."
      }
    }
  ];
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const languageSelect = document.getElementById('languageSelect');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const copyBtn = document.getElementById('copyBtn');


    let currentQuote ;
    let currentLanguage = 'en';
    let isDarkMode = false;


    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      currentQuote = quotes[randomIndex];
      updateQuote();
    }

    function updateQuote() {
      quoteText.textContent = `"${currentLanguage === "en" ? currentQuote.text : currentQuote.translations[currentLanguage]}"`;
      quoteAuthor.textContent = `- ${currentQuote.author}`;
    }
    function copyQuote() {
      // Déterminer la citation dans la langue actuelle
      const quoteText = currentLanguage === "fr"
          ? `"${currentQuote.translations.fr}" - ${currentQuote.author}`
          : currentLanguage === "ar"
          ? `"${currentQuote.translations.ar}" - ${currentQuote.author}`
          : `"${currentQuote.text}" - ${currentQuote.author}`;
  
      // Copier le texte de la citation dans le presse-papiers
      navigator.clipboard.writeText(quoteText);
  
      // Créer une notification
      const notification = document.createElement("div");
      notification.className = "notification";
  
      // Texte de la notification en fonction de la langue
      if (currentLanguage === "fr") {
          notification.textContent = "Citation copiée dans le presse-papiers !";
      } else if (currentLanguage === "ar") {
          notification.textContent = "تم نسخ الاقتباس إلى الحافظة!";
          notification.style.direction = "rtl"; // Support pour l'arabe (droite à gauche)
      } else {
          notification.textContent = "Quote copied to clipboard!";
      }
  
      // Ajouter la notification au body de la page
      document.body.appendChild(notification);
  
      // Supprimer la notification après 2 secondes
      setTimeout(() => {
          notification.remove();
      }, 2000);
  }
  
      
    

    newQuoteBtn.addEventListener('click', getRandomQuote);
    copyBtn.addEventListener('click', copyQuote);
    languageSelect.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      updateQuote();
    });

    // Initialize the first quote
    updateQuote();