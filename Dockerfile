FROM python:3.11-slim

WORKDIR /code

# Install dependencies
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy the rest of the code
COPY . .

# Create a writable cache directory for the AI model
RUN mkdir -p /code/cache && chmod 777 /code/cache
ENV TRANSFORMERS_CACHE=/code/cache

# Start the server on port 7860 (Hugging Face default)
CMD ["uvicorn", "api_main:app", "--host", "0.0.0.0", "--port", "7860"]