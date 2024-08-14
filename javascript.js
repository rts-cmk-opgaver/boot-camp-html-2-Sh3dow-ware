const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.identifier === "big-image") {
        console.log(entry.loadTime);
      }
    });
  });
  observer.observe({ type: "element", buffered: true });
  