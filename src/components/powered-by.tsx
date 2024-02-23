const PoweredBy = () => {
  return (
    <p className="mt-4 text-xs md:text-sm text-gray-600 text-center">
      DegreeGuru is powered by{" "}
      <a href="https://www.langchain.com/" target="_blank">
        LangChain
      </a>
      ,{" "}
      <a href="https://upstash.com" target="_blank">
        Upstash
      </a>
      ,{" "}
      <a href="https://vercel.com" target="_blank">
        Vercel
      </a>{" "}
      •{" "}
      <a href="https://github.com/upstash/DegreeGuru" target="_blank">
        Github
      </a>
    </p>
  );
};

export default PoweredBy;
