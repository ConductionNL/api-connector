<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ReviewRepository::class)
 */
#[ApiResource]
class Review
{
    /**
     + The id of this review.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * The rating of this review (between 0 and 5).
     *
     * @ORM\Column(type="smallint")
     */
    #[Assert\Range(min: 0, max: 5)]
    public int $rating = 0;

    /**
     * The body of the review.
     *
     * @ORM\Column(type="text")
     */
    #[Assert\NotBlank]
    public string $body = '';

    /**
     * The author of the review.
     *
     * @ORM\Column
     */
    #[Assert\NotBlank]
    public string $author = '';

    /**
     * The date of publication of this review.
     *
     * @ORM\Column(type="datetime_immutable")
     */
    #[Assert\NotNull]
    public ?\DateTimeInterface $publicationDate = null;

    /**
     * The book this review is about.
     *
     * @ORM\ManyToOne(targetEntity=Book::class, inversedBy="reviews")
     */
    #[Assert\NotNull]
    public ?Book $book = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getPublicationDate(): ?\DateTimeInterface
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(?\DateTimeInterface $publicationDate): self
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function getBook(): ?Book
    {
        return $this->book;
    }

    public function setBook(?Book $book): self
    {
        $this->book = $book;

        return $this;
    }
}