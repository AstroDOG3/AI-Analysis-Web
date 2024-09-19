import React from 'react';

function AnalysisPage() {
  return (
    <div>
      <h1 className="text-center mt-10">
        <span className="text-4xl sm:text-2xl md:text-7xl border-b-4 border-black">
          Analysis
        </span>
      </h1>
      <div>
        <h2 className="text-lg sm:text-lg md:text-xl mt-10 mx-20 text-center">
          This tool provides corporate insights powered by OpenAI's GPT-4 Turbo! It presents eleven topics for each firm ranging from financial performance to value drivers.
          It also provides an overall summary of earnings call transcripts. It currently covers S&P 500 firms from April 2023 to September 2023.
          <br />
          <br />
          <strong>Disclaimer:</strong> The contents that we present on our website are produced by generative AI based on quarterly earnings calls and may contain errors.
          When referencing our information, investors are responsible for cross-checking the validity of the information presented.
        </h2>
      </div>

      <form>
        {/* Add form elements here if needed */}
      </form>

      {/* Embedding the external website */}
      <div className="mx-10 my-10">
        <iframe
          src="https://langchai-alpha.vercel.app"
          title="Langchai Alpha"
          width="100%"
          height="1000px"
          style={{ border: "none" }
           }
        ></iframe>
      </div>
    </div>
  );
}

export default AnalysisPage;